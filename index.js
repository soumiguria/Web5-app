import { Web5 } from "@web5/api";

const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);

const { record } = await web5.dwn.records.create({
    data: 'Hello web5!',
    message: {
        dataFormat: 'text/plain',
    },
});

console.log('writeResult', record);

const readResult = await record.data.text();

console.log('readResult', readResult);

const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
});

console.log('updateResult', await record.data.text());

// const deleteResult = await web5.dwn.records.delete({
//     from: aliceDid,
//     message: {
//         recordId: record.id,
//     },
// });

// console.log('deleteResult', deleteResult);