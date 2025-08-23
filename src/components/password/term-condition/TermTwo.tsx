import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const TermTwo = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/termtwo", fetcher, {
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
              Lorem Ipsum به سادگی متن ساختگی چاپ و حروفچینی است
                صنعت <b>لورم ایپسوم از آن زمان به سادگی متنی ساده است</b>
                در دهه 1500، زمانی که یک چاپگر ناشناس یک گالری از نوع و
                آن را به هم زد تا یک کتاب نمونه تایپ بسازد. زنده مانده است نه
                تنها پنج قرن، اما همچنین جهش به الکترونیک
                حروفچینی، اساساً بدون تغییر باقی می ماند.{" "}
                <b>Lorem Ipsum یک متن ساده است.</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TermTwo;
