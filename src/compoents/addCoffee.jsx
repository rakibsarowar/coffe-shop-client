

const addCoffee = () => {
    return (
        <div>
            <h1>add Coffee</h1>
            <form>
                <div className="flex gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Quantily</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default addCoffee
    ;