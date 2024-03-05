import React from 'react'

const SecondRow = () => {
    return (
        <div className="w-full mt-4 flex justify-between gap-4">
            <div className="w-[60%] flex justify-between p-4 rounded-2xl bg-white">
                <div className="w-1/2">
                    <div className="font-semibold text-gray-700 text-xl">
                        Build by developers
                    </div>
                    <div className="text-2xl font-bold text-gray-700 mt-2 mb-3">
                        Soft UI Dashboard
                    </div>
                    <div>
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                    </div>
                </div>
                <div className="w-1/3">
                    <img
                        className="w-[100%]"
                        src="https://img.freepik.com/premium-vector/vector-cartoon-rent-house-icon-comic-style-rent-sign-illustration-pictogram-rental-business-splash-effect-concept_157943-3466.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-[40%] relative bg-white flex justify-center items-center p-4 rounded-xl">
                <img
                    className="w-full rounded-xl"
                    src="https://www.mhaac.info/uploads/3/4/4/8/34488857/boarding-homes-pdf-1_orig.png"
                    alt=""
                />
                <div className="absolute top-5 left-5">
                    {/* <div>Work with the rockets</div>
                    <div>
                        Wealth creation is an evolutionarily recent positive-sum
                        game. It is all about who take the opportunity first.
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SecondRow
