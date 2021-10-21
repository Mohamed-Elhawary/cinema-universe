import { Pagination } from 'antd';

const Pag = ({currentPage, totalPages, onChange}) => {
    

    return (
        <Pagination 
            showSizeChanger={false}
            defaultCurrent={currentPage}
            total={totalPages}
            onChange={onChange}
        />
    );

}

export default Pag;