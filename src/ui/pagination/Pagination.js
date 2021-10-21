import { Pagination } from 'antd';

const Pag = ({currentPage, totalPages, onChange}) => {

    return (
        <Pagination 
            defaultCurrent={1}
            current={currentPage}
            total={totalPages} 
            onChange={onChange} 
        />
    );

}

export default Pag;