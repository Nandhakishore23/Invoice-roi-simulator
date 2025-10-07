// // const BASE = process.env.REACT_APP_API_URL || '';

// // export async function postSimulate(payload) {
// //   const res = await fetch(`${BASE}/simulate`, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(payload)
// //   });
// //   return res.json();
// // }

// // export async function postScenario(obj) {
// //   const res = await fetch(`${BASE}/scenarios`, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(obj)
// //   });
// //   return res.json();
// // }

// // export async function listScenarios() {
// //   const res = await fetch(`${BASE}/scenarios`);
// //   return res.json();
// // }

// // export async function getScenario(id) {
// //   const res = await fetch(`${BASE}/scenarios/${id}`);
// //   return res.json();
// // }

// // export async function generateReport(body) {
// //   const res = await fetch(`${BASE}/report/generate`, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(body)
// //   });
// //   const html = await res.text();
// //   return { html };
// // }



// const API_URL = process.env.REACT_APP_API_URL;

// export const simulateROI = async (data) => {
//   const res = await fetch(`${API_URL}/api/simulate`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const saveScenario = async (data) => {
//   const res = await fetch(`${API_URL}/save`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };


import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const simulateROI = (data) => API.post('/simulate', data);
export const saveScenario = (data) => API.post('/scenarios', data);
export const getScenarios = () => API.get('/scenarios');
export const generateReport = (data) => API.post('/scenarios/report/generate', data, { responseType: 'blob' });

