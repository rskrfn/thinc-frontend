import React from "react";
import classes from "./NewClass.module.css";
import NewClassContent from "../components/newclass_content/NewClassContent";
import SearchIcon from "../../../assets/icons/icon_search.png";

function NewClass(props) {
  const { newclass, loading,
    //  newclassinfo, filter, setFilter, getNewClass 
    } =
    props;
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p className={classes.pageheader}>New class</p>
        <section className={classes.filtersection}>
          <div className={classes.searchcontainer}>
            <div className={classes.searchboxcontainer}>
              <img className={classes.searchicon} src={SearchIcon} alt="" />
              <input className={classes.searchbox} placeholder="Quick search" />
            </div>
            <button className={classes.searchbtn}>Search</button>
          </div>
          <div className={classes.filtercontainer}>
            <div className={classes.dropdowncontainer}>
              <select className={classes.dropdown}>
                <option value={0} selected disable hidden>
                  Categories
                </option>
                <option value={1}>Software</option>
                <option value={2}>History</option>
                <option value={3}>Psychology</option>
                <option value={4}>Finance</option>
                <option value={5}>Mathematics</option>
                <option value={6}>Science</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select className={classes.dropdown}>
                <option value={0} selected disable hidden>
                  Level
                </option>
                <option value={1}>Beginner</option>
                <option value={2}>Intermediate</option>
                <option value={3}>Advance</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select className={classes.dropdown}>
                <option value={0} selected disable hidden>
                  Pricing
                </option>
                <option value={1}>Free</option>
                <option value={2}>Paid</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select className={classes.dropdown}>
                <option value={0} selected disable hidden>
                  Sort by
                </option>
                <option value="name-AZ">Name ascending</option>
                <option value="name-ZA">Name descending</option>
                <option value="category-AZ">Category ascending</option>
                <option value="category-ZA">Category descending</option>
                <option value="Price-AZ">Price ascending</option>
                <option value="price-ZA">Price descending</option>
                <option value="level-AZ">Level ascending</option>
                <option value="level-ZA">Level descending</option>
              </select>
            </div>
          </div>
        </section>
        <section className={classes.newclasscontainer}>
          <div className={classes.headersection}>
            <div className={classes.headerclassname}>
              <p className={classes.headertext}>Class Name</p>
            </div>
            <div className={classes.headercategory}>
              <p className={classes.headertext}>Category</p>
            </div>
            <div className={classes.headerdescription}>
              <p className={classes.headertext}>Description</p>
            </div>
            <div className={classes.headerlevel}>
              <p className={classes.headertext}>Level</p>
            </div>
            <div className={classes.headerpricing}>
              <p className={classes.headertext}>Pricing</p>
            </div>
          </div>
          <div className={classes.contentsection}>
            <NewClassContent newclass={newclass} loading={loading} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default NewClass;
