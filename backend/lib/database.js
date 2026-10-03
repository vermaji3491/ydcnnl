const { getSupabase } = require("../config/db");

const camelCase = (key) => key.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
const snakeCase = (key) => key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

function fromDatabase(row) {
  if (!row) return row;
  const apiRow = { ...row };
  Object.entries(row).forEach(([key, value]) => {
    const camelKey = camelCase(key);
    if (camelKey !== key) apiRow[camelKey] = value;
  });
  return apiRow;
}

function toDatabase(payload = {}) {
  return Object.fromEntries(
    Object.entries(payload)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [snakeCase(key), value])
  );
}

function throwIfError(error) {
  if (error) throw error;
}

async function selectRows(table, { filters = {}, order, ascending = true } = {}) {
  let query = getSupabase().from(table).select("*");
  Object.entries(filters).forEach(([column, value]) => {
    query = query.eq(column, value);
  });
  if (order) query = query.order(order, { ascending });

  const { data, error } = await query;
  throwIfError(error);
  return data.map(fromDatabase);
}

async function getRow(table, id) {
  const { data, error } = await getSupabase().from(table).select("*").eq("id", id).maybeSingle();
  throwIfError(error);
  return fromDatabase(data);
}

async function insertRow(table, payload) {
  const { data, error } = await getSupabase().from(table).insert(toDatabase(payload)).select("*").single();
  throwIfError(error);
  return fromDatabase(data);
}

async function updateRow(table, id, payload) {
  const { data, error } = await getSupabase()
    .from(table)
    .update({ ...toDatabase(payload), updated_at: new Date().toISOString() })
    .eq("id", id)
    .select("*")
    .maybeSingle();
  throwIfError(error);
  return fromDatabase(data);
}

async function deleteRow(table, id) {
  const { data, error } = await getSupabase().from(table).delete().eq("id", id).select("id").maybeSingle();
  throwIfError(error);
  return Boolean(data);
}

async function countRows(table) {
  const { count, error } = await getSupabase().from(table).select("id", { count: "exact", head: true });
  throwIfError(error);
  return count || 0;
}

module.exports = { countRows, deleteRow, fromDatabase, getRow, insertRow, selectRows, toDatabase, updateRow };