const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div >
            <div className="card card-side bg-base-100 shadow-xl m-20">
                <div className="w-3/12">
                    <figure><img className="" src={photo} alt="Movie" /></figure>
                </div>
                <div className="flex p-4 gap-4">
                    <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn btn-active">View</button>
                            <button className="btn">Edit</button>
                            <button className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;