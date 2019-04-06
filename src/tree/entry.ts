interface entryBase {
    id: string,
    title: string,

    childEntries?: entry[];
}

// enum entryType {
//     project = 'project',
//     service = 'service',
//     function = 'function',
//     request = 'request',
//     response = 'response',
//     datatype = 'datatype',

//     section = 'section',
//     text = 'text',
// }

interface projectEntry extends entryBase {
    type: 'project';
}
interface serviceEntry extends entryBase {
    type: 'service';
}

type entry = projectEntry | serviceEntry;

export default entry;
