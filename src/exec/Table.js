import React, { Component } from 'react';
import { Row } from 'antd';
import '../css/Table.css';

class ExecTable extends Component {

    //删除事件的回调，调用时也必须使用箭头函数回调的形式，不然会有问题（当前我遇到的问题是点击add按钮，同样能触发这个删除事件）
    handleDelete = (id) => {
        debugger
        if (window.confirm('确定删除吗？')) {
            this.props.deleteRow(id);
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <table style={{ marginLeft: '20%', width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Nation</th>
                                <th>Phone Number</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.userList.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>
                                                {item.password}
                                            </td>
                                            <td>{item.nation}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                <button href="javascript:;" onClick={() => { this.handleDelete(item.id) }}>删除</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </Row>
            </div>
        )
    }

}

export default ExecTable;