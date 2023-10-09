const Units = [
	{
		label: 'Unidade',
		value: 'UN',
	},
	{
		label: 'Quilograma',
		value: 'KG',
	},
	{
		label: 'Grama',
		value: 'GR',
	},
	{
		label: 'Litro',
		value: 'LT',
	},
	{
		label: 'Mililitro',
		value: 'ML',
	},
	{
		label: 'Caixa',
		value: 'CX',
	},
	{
		label: 'Fardo',
		value: 'FD',
	},
	{
		label: 'Pacote',
		value: 'PC',
	},
	{
		label: 'Saco',
		value: 'SC',
	},
];

Object.freeze(Units);

export class UnitTypesController {
	static async getAll() {
		return Units;
	}
}
