
const One = ({ str }: any) => {
   
    return (
        <div>
            {
                str.attributes.images.data.map((el: any, index: number) => {
                    return <img key={index} src={`https://wclouds.ru${el.attributes.url}`} alt="" width={300} />;
                })}
        </div>
    );
};

export default One;
