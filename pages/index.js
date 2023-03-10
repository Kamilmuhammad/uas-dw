import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [nama, setNama] = useState("");
    const [tempat, setTempat] = useState("");
    const [kenalan, setKenalan] = useState(false);
    const [pilih, setPilih] = useState(false);
    const [mau, SetMau] = useState(false);

    function harusMau() {
        SetMau(true);
        setTimeout(() => {
            SetMau(false);
        }, 2000);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (nama) {
            setKenalan(true);
        } else {
            alert("nama tidak boleh kosong");
        }
    }
    function handleClick() {
        setPilih(true);
    }
    function handleSubmitPilih(e) {
        e.preventDefault();
        const message = "asikkk hayuu kita makan di " + tempat;
        const whatsappLink = `https://wa.me/+6287726157974?text=${message}`;
        window.open(whatsappLink);
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-black h-screen justify-center items-center text-white flex">
                <div
                    className={`w-11/12 h-1/3 bg-gray-400 rounded-lg justify-start items-center ${
                        kenalan ? "hidden" : "flex"
                    } ${mau ? "hidden" : "flex"}`}
                >
                    <form
                        className="flex flex-col w-2/3 text-black  mx-auto gap-2"
                        onSubmit={handleSubmit}
                    >
                        <label className="text-2xl uppercase" htmlFor="">
                            ini siapa yaaaa?
                        </label>
                        <input
                            onChange={(e) =>
                                setNama(e.target.value.toUpperCase())
                            }
                            className="bg-purple-200 rounded-full p-2 font-semibold "
                            type="text"
                            placeholder="Masukkan nama kamu...."
                        />
                        <button
                            type="submit"
                            className="bg-black w-2/3 mx-auto text-white mt-2 rounded-full py-3 px-4"
                        >
                            Kirim dongg
                        </button>
                    </form>
                </div>
                {/* ganti */}
                <div
                    className={`w-11/12 h-1/3 bg-gray-400 rounded-lg justify-center text-black text-center space-y-4 ${
                        kenalan ? "block" : "hidden"
                    } ${kenalan && pilih ? "hidden" : "ok"}`}
                >
                    <h1 className="text-4xl font-semibold mt-4">
                        Hallo {nama}????
                    </h1>
                    <p className="text-center">Makan yuu sama akuu?</p>
                    <div className="flex justify-evenly">
                        <button
                            onClick={() => handleClick()}
                            className=" bg-black py-2 px-3 text-white rounded-full mr-2 hover:bg-zinc-800"
                        >
                            Mauuuu
                        </button>
                        <button
                            onClick={harusMau}
                            className={` py-2 px-3 text-white rounded-full ${
                                mau ? "bg-red-800" : "bg-black"
                            }`}
                        >
                            {mau ? "harus Mauuu" : "gamau"}
                        </button>
                    </div>
                    {mau && (
                        <p className="text-red-600">
                            {" "}
                            Gabole gamau!! harus Mauuuu
                        </p>
                    )}
                </div>
                <div
                    className={`w-11/12 h-1/3 bg-gray-400 rounded-lg justify-center text-black text-center gap-4 ${
                        pilih ? "flex flex-col" : "hidden"
                    }`}
                >
                    <h1 className="text-4xl font-semibold">????{nama}</h1>
                    <p className="text-center">Mau makan dimana kita??</p>
                    <div>
                        <form onSubmit={handleSubmitPilih}>
                            <input
                                onChange={(e) => setTempat(e.target.value)}
                                className="bg-purple-300 rounded-full p-2 font-semibold "
                                type="text"
                                placeholder="Masukkan nama kamu...."
                            />
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
