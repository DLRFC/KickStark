export type Project = {
    id: number,
    name: string,
    description: string,
    network: string,
    category1: string,
    category2: string,
    repository: string,
    active: boolean,
    loginType: string,
    login: string,
    phaseSummaries: string[],
    phaseDescriptions: string[][]
}