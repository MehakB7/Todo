import "./footer.scss";
import { TodoFilter } from "../redux/slices/filter";
import { colors } from "../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import { changeStatusFilter, changeColorFilter } from "../redux/slices/filter";

export const Footer = () => {
  const statusFilter = useSelector((state) => {
    return state.filter.status;
  });

  console.log("status filter is called", statusFilter);

  const dispatch = useDispatch();

  const onStatusChange = (e) => {
    dispatch(changeStatusFilter(e.target.value));
  };

  const onColorSelect = (e) => {
    dispatch(
      changeColorFilter({ value: e.target.value, isActive: e.target.checked })
    );
  };

  return (
    <div className="footer">
      <div className="footer__status_filter">
        {Object.values(TodoFilter).map((item, index) => {
          return (
            <div key={index} className="footer__radio_wrapper">
              <input
                className="footer__radio_wrapper--button"
                type="radio"
                value={item}
                name="status"
                onChange={onStatusChange}
                checked={statusFilter === item}
              />
              <label>{item}</label>
            </div>
          );
        })}
      </div>
      <div className="footer__tag_filter">
        {colors.map((item, index) => {
          return (
            <div key={index} className="footer__radio_wrapper">
              <input
                className="footer__radio_wrapper--button"
                type="checkbox"
                name="status"
                value={item}
                onChange={onColorSelect}
              />
              <label style={{ color: item }}>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
