export function handleInputs(setFun, e) {
    const { name, value } = e.target;

    setFun((prev) => ({
        ...prev,
        [name]: value,
    }));
}