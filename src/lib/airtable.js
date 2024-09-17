'use server';

import Airtable from "airtable";
console.log('AIRTABLE_BASE_ID:', process.env.AIRTABLE_BASE_ID);
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey,
});

const base = Airtable.base(baseId);

export default base;