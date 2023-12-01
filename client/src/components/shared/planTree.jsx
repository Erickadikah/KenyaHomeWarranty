import React from 'react';
import { Tree, Typography } from 'antd';
import { FaCheck, FaTimes } from 'react-icons/fa';
import "../../assets/styles/landingPage/tree.scss"

const PlanTree = (props) => {
  const { TreeNode } = Tree;
  const { Text } = Typography;

  const getStatusText = (item, status) => {
    if (status === true) {
      return (
        <Text>
          <span style={{color: props.color}}>{item}</span> <span className="text-success">- <FaCheck fontSize={"10px"} /></span>
        </Text>
      );
    } else if (status === false) {
      return (
        <Text>
          <span style={{color: props.color}}>{item}</span> <span className="text-danger">- <FaTimes fontSize={"10px"} /></span>
        </Text>
      );
    } else if (status === 'Add-On') {
      return (
        <Text>
          <span style={{color: props.color}}>{item}</span> <span className="text-info">- Add-On</span>
        </Text>
      );
    }
  };

  const renderCoverageTree = (coverage) => {
    return coverage.map(([item, status]) => (
      <TreeNode title={getStatusText(item, status)} key={item} isLeaf={true} className={props.varriant} />
    ));
  };

  const renderPlanTree = (plan) => {
    return plan.map((section, index) => (
      <TreeNode title={section.title} key={index} className={props.varriant}>
        {renderCoverageTree(section.covarage)}
      </TreeNode>
    ));
  };

  return (
    <Tree showLine className={props.varriant}>
      {renderPlanTree(props.plan)}
    </Tree>
  );
};

export default PlanTree;
