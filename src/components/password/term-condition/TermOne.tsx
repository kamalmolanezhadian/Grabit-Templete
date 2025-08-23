import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const TermOne = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/termone", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>محصولات بارگیری نشد ...</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      <div className="gi-common-wrapper">
        {getData().map((item: any, index: any) => (
          <div key={index} className="col-sm-12 gi-cgi-block">
            <div className="gi-cgi-block-inner">
              <h5 className="gi-cgi-block-title">{item.questions}</h5>
              <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s,
                هنگامی که یک چاپگر ناشناس یک گالری از نوع خود را برداشت و آن را درهم ریخت
                برای ساختن یک کتاب نمونه نوع این نه تنها پنج جان سالم به در برده است
                قرن ها، بلکه جهشی به حروفچینی الکترونیکی،
                اساساً بدون تغییر باقی می ماند.
                <b>Lorem Ipsum یک متن ساده است.</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TermOne;
