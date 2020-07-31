import React from 'react';
import '../styles/main.less';
import LabelMenu from './labels';

function TabList() {
  // 열려있는 탭 목록
  return <h1>TabList</h1>;
}

function BreadCrumb() {
  // 선택된 파일 경로
  return <h1>BreadCrumb</h1>;
}

function DataView() {
  // Canvas
  return <h1>DataView</h1>;
}

function MainView() {
  return (
    <div className="main-view">
      <TabList></TabList>
      <BreadCrumb></BreadCrumb>
      <DataView></DataView>
      <h1>TEST</h1>
    </div>
  );
}

function WorkingArea() {
  return (
    <div className="working-area">
      <MainView></MainView>
      <LabelMenu></LabelMenu>
    </div>
  );
}

export default WorkingArea;
