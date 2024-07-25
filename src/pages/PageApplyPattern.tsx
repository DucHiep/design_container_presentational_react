import React, {useCallback} from "react";
import ImageList from "@/components/shared/ImageList.tsx";
import {useImage} from "@/hooks/useImage.tsx";
import useListing from "@/hooks/useListing.tsx";
import {useModal} from "@/hooks/useModal.tsx";

const PageApplyPattern = () => {

    const modal = useModal();
    const image = useImage();
    const {data} = useListing()

    const handleClickImage = useCallback((urlImage: string) => {
        modal.onOpen()
        image.setUrlImage(urlImage)
    }, []);

    return (
        <ImageList data={data} handleClickImage={handleClickImage} />
    );
};

export default React.memo(PageApplyPattern);