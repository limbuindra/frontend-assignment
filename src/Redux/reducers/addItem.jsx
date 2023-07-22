
const addItem = [];

const addItems = (state = addItem, action) => {
	const product = action.payload;
	switch (action.type) {
		case "ADDITEM":
			const alreadyExist = state.find((x) => x.id === product.id);
			if (alreadyExist) {
				return state.map((x) =>
					x.id === product.id ? { ...x, qty: x.qty + 1 } : x
				);
			} else {
				const product = action.payload;
				return [...state, { ...product, qty: 1 }];
			}
			break;
		case "DELITEM":
			
			return state = state.filter((x)=> {
				return x.id !== action.payload.id
			})
			break;

		default:
			return state;
			break;
	}
};

export default addItems;
