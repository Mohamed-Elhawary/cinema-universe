import { CustomizedPagination } from "styles";

const Pagination = ({
    currentPage,
    totalPages,
    onChange}) => {
    

    return (
        <CustomizedPagination 
            defaultCurrent={currentPage}
            total={totalPages}
            showSizeChanger={false}
            onChange={onChange}
        />
    );

}

export default Pagination;