'use server';

import Airtable from "airtable";
const apiKey = 'patLsKooeR7KSUs3D.4fa1a4d866d0f3d253f1958657b31fc489380b9083a186782f7be0ff991b40f9';
const baseId = 'appCfHeiwqePN27kL';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey,
});

const base = Airtable.base(baseId);

export default base;