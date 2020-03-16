import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {profiles: state.profiles}
};

const mapDispatchToProps = dispatch => {
  return {
    addProfile: () =>
      dispatch({
        type: 'ADD_PROFILE'
      })
  }
}

const connectedList = ({profiles}) => (
    <ul>
    {profiles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
)

const List = connect(mapStateToProps, mapDispatchToProps)(connectedList);

export default List;
