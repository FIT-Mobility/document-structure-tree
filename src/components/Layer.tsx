interface Layer {
    id: string,
    name: string,
    symbol: ,
    childLayer: Layer[],
}

const project: Layer = {
    id: 'project',
    name: "Project",
    symbol: '📚',
    childLayer: [],
};

