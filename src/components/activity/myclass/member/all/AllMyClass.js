import React from "react";
import classes from "./AllMyClass.module.css";

import backIcon from "../../../../../assets/icons/icon_back.png";
import searchIcon from "../../../../../assets/icons/icon_search.png";
import MyClassContent from "../../../components/myclass_content/member/MyClassContent";

function AllMyClass(props) {
  const { myclass, loading, filter, setFilter, setActivitySection } = props;
  return (
    <main className={classes.maincontainer}>
      <section
        className={classes.headercontainer}
        onClick={() => {
          setActivitySection("main");
        }}
      >
        <img className={classes.backicon} src={backIcon} alt="" />
        <p className={classes.pageheader}>My Class</p>
      </section>
      <section className={classes.filtercontainer}>
        <div className={classes.searchcontainer}>
          <img className={classes.searchicon} src={searchIcon} alt="" />
          <input className={classes.inputbox} placeholder="Quick Search" />
          <button className={classes.searchbtn}>Search</button>
        </div>
      </section>
      <section className={classes.sortsection}>
        <div className={classes.sortcontainer}>
          <div className={classes.sortcontent}>
            <p className={classes.sorthelpertext}>Sort by :</p>
            <div className={classes.dropdowncontainer}>
              <select
                className={classes.dropdown}
                onChange={(e) => {
                  setFilter({ ...filter, sort: e.target.value });
                }}
              >
                <option value={null} selected disable hidden>
                  Sort by
                </option>
                <option value="name-AZ">Name A to Z</option>
                <option value="name-ZA">Name Z to A</option>
                <option value="category-AZ">Category A to Z</option>
                <option value="category-ZA">Category Z to A</option>
                <option value="price-AZ">Price A to Z</option>
                <option value="price-ZA">Price Z to A</option>
                <option value="level-AZ">Level A to Z</option>
                <option value="level-ZA">Level Z to A</option>
              </select>
              <button
                className={classes.clearfilterbtn}
                onClick={() => {
                  // setFilter({
                  //   search: "",
                  //   sort: "",
                  //   category: "",
                  //   level: "",
                  //   price: "",
                  //   page: "",
                  // });
                }}
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.tableheadersection}>
        <div className={classes.headercheckbox}>
          <input
            className={classes.checkbox}
            type="checkbox"
            //   checked={checked}
            onChange={() => {
              // setChecked(!checked);
            }}
          />
        </div>
        <div className={classes.headerclassname}>
          <p className={classes.headertext}>Class Name</p>
        </div>
        <div className={classes.headercategory}>
          <p className={classes.headertext}>Category</p>
        </div>
        <div className={classes.headerdesc}>
          <p className={classes.headertext}>Description</p>
        </div>
        <div className={classes.headerprogress}>
          <p className={classes.headertext}>Progress</p>
        </div>
        <div className={classes.headerstatus}>
          <p className={classes.headertext}>Status</p>
        </div>
        <div className={classes.headerscore}>
          <p className={classes.headertext}>Score</p>
        </div>
      </section>
      <section className={classes.tablecontent}>
        <MyClassContent myclass={myclass} loading={loading} />
      </section>
    </main>
  );
}

export default AllMyClass;
