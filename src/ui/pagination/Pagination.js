import { CustomizedPagination } from "styles";

const Pagination = ({
    defaultCurrent,
    current,
    totalPages,
    onChange}) => {
    

    return (
        <CustomizedPagination 
            defaultCurrent={defaultCurrent}
            current={current ? current : 1}
            total={totalPages}
            showSizeChanger={false}
            onChange={onChange}
        />
    );

}

export default Pagination;