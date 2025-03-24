import { useState } from "react";
import { X } from "lucide-react";

interface EditEmployeeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditEmployeeModal = ({ isOpen, onClose }: EditEmployeeModalProps) => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleDeleteImage = () => {
        setImage(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#121508] bg-opacity-60 flex items-center justify-center z-50 p-4  opacity-100">
                                {/* <div className='h-1 w-14 bg-[#D3FF1F] absolute top-13'></div> */}

            <div className="bg-[#0F0F0F] rounded-lg p-6 w-full max-w-lg text-white shadow-xl relative border border-[#232323]">

                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
                    <X size={20} />
                </button>

                {/* Title & Subtitle */}
                <h2 className="text-lg font-medium mb-1">Edit Employee Details</h2>
                <p className="text-sm text-neutral-500 mb-6">
                    Add employee details, Name, Email, work status, and more
                </p>

                {/* Image Upload Section */}
                <div className="flex items-center gap-4 mb-6 ">
                    <div className="    ">
                        {image ? (
                            <img src='/logo.svg' alt="Profile" className="w-full h-full object-cover rounded-md" />
                        ) : (
                            <>
                                <img src='/logo.svg' alt="Profile" className="w-full h-full object-cover rounded-md" />

                            </>
                        )}
                    </div>

                    <div className="w-full ">
                        <input type="file" accept="image/*" id="imageInput" className="hidden" onChange={handleImageUpload} />
                        <div className="flex gap-4 mb-1">
                            <label
                                htmlFor="imageInput"
                                className="bg-[#262626] text-white text-xs  font-semibold border border-[#3A3A3A] px-2 py-1.5 rounded-md cursor-pointer hover:bg-[#323232]"
                            >
                                Upload new image
                            </label>
                            <label
                                htmlFor="imageInput"
                                className="bg-[#191919] text-white text-xs  font-semibold border border-[#3A3A3A] px-2 py-1.5 rounded-md cursor-pointer hover:bg-[#323232]"
                            >
                              Delete
                            </label>
                           
                        </div>
                        <p className="text-xs text-neutral-500">
                            Recommended 160x160px in PNG or JPG format, <span className="text-white">Max size 1MB</span>
                        </p>
                    </div>
                </div>

                {/* Employee Form */}
                <form className="space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                        <input type="email" placeholder="Email Address" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                        <input type="text" placeholder="Wallet Address" className="border border-neutral-500 p-3 rounded-lg w-full outline-none col-span-2" />
                        <input type="text" placeholder="Mobile Number" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                        <input type="text" placeholder="Position" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                        <input type="text" placeholder="Start of cooperation" className="border border-neutral-500 p-3 rounded-lg w-full outline-none col-span-2" />
                        <input type="text" placeholder="Employee Status" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                        <input type="text" placeholder="Working Status" className="border border-neutral-500 p-3 rounded-lg w-full outline-none" />
                    </div>


                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            className="bg-[#2A2A2A] text-white px-3 py-1 rounded-2xl border border-[#3A3A3A] hover:bg-[#3A3A3A]"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-[#D9FF00] text-black px-3 py-1 text-sm rounded-2xl font-semibold hover:bg-[#C7F000]">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeeModal;
