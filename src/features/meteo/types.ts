export type Location = {
    Name: string
    Lang: string
    Timezone: string
}

export type Meteo = {
    current: {
        weather: Map<string, string>
    }
    forex: Array<Map<string, string>>
}