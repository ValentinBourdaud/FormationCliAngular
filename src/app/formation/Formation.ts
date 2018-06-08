export default class Formation {
    private _nom: string;
    private _description: string;
    private _price: number;
    private _dateDebut: Date;
    private _dateFin: Date;

    constructor(nom: string, description: string, price?: number, dateDebut?: Date, dateFin?: Date) {
        this._nom = nom;
        this._description = description;

        if (price) {
            this._price = price;
        }
        if (dateDebut) {
            this._dateDebut = dateDebut;
        }
        if (dateFin) {
            this._dateFin = dateFin;
        }

    }

    get nom(): string {
        return this._nom;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }
    get dateDebut(): Date {
        return this._dateDebut;
    }
    get dateFin(): Date {
        return this._dateFin;
    }
}
