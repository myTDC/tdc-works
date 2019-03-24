const callReducer = (actionType, object) => {
	// console.log('[Act/User][asyncTrigger] Action Dispatched: ', type, ' with data: ', object);
	return {
		type: actionType,
		obj: object
	};
};

export default callReducer