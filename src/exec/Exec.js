import React, { Component } from 'react';
import { Row, Col, Input, Button, Select } from 'antd';
import ExecTable from './Table'

const { Option } = Select;

class ExecPanel extends Component {

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);//改变this指向，为组件实例
    this.deleteRow = this.deleteRow.bind(this);
    this.state = {
      id: "",
      name: "",
      password: "",
      nation: "",
      phoneNumber: "",
      userList: []
    };
  }

  componentDidMount() {
    console.log("welcome to eccom");
  }

  //获取表单元素的值
  changeInput(name, value) {
    this.setState({
      [name]: value
    });
  }

  //添加数据
  add() {
    let { name, password, nation, phoneNumber, userList } = this.state;
    if (name.trim('') != '') {
      let user = {};
      user.id = new Date();
      user.name = name;
      user.password = password;
      user.nation = nation;
      user.phoneNumber = phoneNumber;
      userList.push(user);
      this.setState({
        userList
      })
    } else {
      alert("请先填写信息！");
    }
    //给state赋值之后，需要清空表单元素值
  }

  //删除行
  deleteRow(id) {
    //获取原来的state
    const { userList } = this.state;
    //删除选中的数据
    const newUserList = userList.filter((userObj) => {
      return userObj.id != id;
    })
    //更新state
    this.setState({ userList: newUserList });
  }

  render() {
    let { userList } = this.state;
    return (
      <div>
        <Row style={{ marginTop: "20px" }}>
          <Col span={6}>Name</Col>
          <Col span={6}>
            <Input id="nameInput" onChange={e => this.changeInput("name", e.target.value)} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col span={6}>Password</Col>
          <Col span={6}>
            <Input.Password onChange={e => this.changeInput("password", e.target.value)} />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col span={6}>Nation</Col>
          <Col span={6}>
            <Select style={{ width: '100%' }} onChange={e => this.changeInput("nation", e)}>
              <Option value="本地">本地</Option>
              <Option value="AD">AD</Option>
            </Select>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col span={6}>Phone Number</Col>
          <Col span={6}>
            <Input onChange={e => this.changeInput("phoneNumber", e.target.value)} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Button type="primary" onClick={this.add}>Add</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}>
            <ExecTable userList={userList} deleteRow={this.deleteRow} />
          </Col>
        </Row>
      </div>
    );

  }
}

export default ExecPanel;