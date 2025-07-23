// src/api/transportApi.js

const API_URL = "http://localhost:5000/api/transport";

export const fetchStatements = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const fetchStatementByDate = async (date) => {
  const res = await fetch(`${API_URL}/${date}`);
  return res.json();
};

export const createStatement = async (entry) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry)
  });
  return res.json();
};

export const updateStatement = async (date, updatedEntry) => {
  const res = await fetch(`${API_URL}/${date}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedEntry)
  });
  return res.json();
};

export const deleteStatement = async (date) => {
  const res = await fetch(`${API_URL}/${date}`, { method: 'DELETE' });
  return res.json();
};
