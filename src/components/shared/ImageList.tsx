import {Modal} from "@/components/ui/modal.tsx";
import {useModal} from "@/hooks/useModal.tsx";

interface ImageListProps {
    data: IListing[],
    handleClickImage: (urlImage: string) => void

}

const ImageList = ({data = [], handleClickImage}: ImageListProps) => {
    const modal = useModal();

    return (
        <>
            <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:p-6">
                {
                    data?.map((listing: IListing) => (
                        <div key={listing.id}
                             className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                            <img onClick={() => handleClickImage(listing.image)} alt={listing.name} src={listing.image}
                                 width={500} height={400} className="object-cover w-full h-64"/>
                            <div className="p-4 bg-background">
                                <h3 className="text-xl font-bold">{listing.name}</h3>
                                <p className="text-sm text-muted-foreground">{listing.city},{listing.state}</p>
                                <h4 className="text-lg font-semibold md:text-xl"> ${new Intl.NumberFormat('en-US').format(listing.price)}</h4>

                                <p className="text-sm text-muted-foreground">{listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft</p>
                            </div>
                        </div>
                    ))
                }
            </section>

            {modal.isOpen && <Modal isOpen={modal.isOpen} onClose={modal.onClose}/>}
        </>
    );
};


export default ImageList;