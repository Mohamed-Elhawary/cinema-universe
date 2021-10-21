import { CustomizedPagination } from "styles";

const Pagination = ({currentPage, totalPages, onChange}) => {
    

    return (
        <CustomizedPagination 
            showSizeChanger={false}
            defaultCurrent={currentPage}
            total={totalPages}
            onChange={onChange}
        />
    );

}

export default Pagination;