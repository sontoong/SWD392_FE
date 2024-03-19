// import {
//   FileExclamationOutlined,
//   InsertRowBelowOutlined,
//   PieChartOutlined,
//   SnippetsOutlined,
//   StopOutlined,
//   UserOutlined,
//   CalculatorOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// import { Menu, MenuProps } from "antd";
// import Sider from "antd/es/layout/Sider";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { cn } from "../../utils/cn";
// import { useAppSelector } from "../../redux/hook";

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label: <Link to={`/${key}`}>{label}</Link>,
//   } as MenuItem;
// }

// export default function MySider() {
//   const select = useLocation();

//   const selected = select.pathname.split("/")[1];
//   const [collapsed, setCollapsed] = useState(window.innerWidth < 1280);

//   const data = useAppSelector((state) => state.roleCheck.role);

//   useEffect(() => {
//     const handleResize = () => {
//       setCollapsed(window.innerWidth < 1280);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // const handleCollasped = (pre: boolean) => {
//   //   setCollapsed(!pre);
//   // };

//   const getConditionalItems = (): MenuItem[] => {
//     switch (data.role) {
//       case "class-admin":
//         return [
//           getItem("Dashboard", "dashboard", <PieChartOutlined />),
//           getItem("Danh sách môn học", "subjects", <SnippetsOutlined />),
//           getItem("Danh sách lớp", "classes", <InsertRowBelowOutlined />),
//           getItem("Danh sách báo báo", "reports", <FileExclamationOutlined />),
//           getItem("Danh sách vi phạm", "mistakes", <StopOutlined />),
//         ];
//       case "trainee":
//         return [
//           getItem("Danh sách môn học", "subjects", <SnippetsOutlined />),
//           getItem("Danh sách lớp", "classes", <InsertRowBelowOutlined />),
//           getItem("Điểm cá nhân", "gradePersonal", <CalculatorOutlined />),
//           getItem(
//             "Điểm danh cá nhân",
//             "check-attendence-individual",
//             <CalculatorOutlined />,
//           ),
//           getItem(
//             "Danh sách báo báo cá nhân",
//             "reportTrainee",
//             <FileExclamationOutlined />,
//           ),
//         ];
//       case "manager-admin":
//         return [
//           getItem("Danh sách tài khoản ", "accountList", <UserOutlined />),
//           getItem("Danh sách báo cáo ", "reports", <FileExclamationOutlined />),
//           getItem("Danh sách môn học ", "subjects", <SnippetsOutlined />),
//           getItem("Danh sách lớp ", "classes", <InsertRowBelowOutlined />),
//         ];
//       default:
//         return []; // Default case for unknown roles or other handling
//     }
//   };

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await agent.Role.checkRole();
//   //     dispatch(roleCheckSuccess(response));
//   //   };
//   //   fetchData();
//   // }, []);

//   return (
//     <>
//       <Sider
//         theme="light"
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//         className="overflow-hidden border-r-[1px]"
//         trigger={
//           <div className="w-full border-r-[1px] border-t-[1px]">
//             <MenuOutlined></MenuOutlined>
//           </div>
//         }
//         width={256}
//       >
//         <div className="demo-logo-vertical border-r-[1px] border-gray-200">
//           <img
//             src="https://firebasestorage.googleapis.com/v0/b/class-srum.appspot.com/o/Logo.jpg?alt=media&token=becebdc8-8f3d-4eae-8c43-c33d3cdf0822"
//             alt="logo"
//             className={cn("mx-auto max-w-[199px] py-2 ", {
//               hidden: collapsed,
//             })}
//           />
//           <img
//             src="https://static-00.iconduck.com/assets.00/ant-design-icon-1024x1023-8uckm0lb.png"
//             alt="logo"
//             className={cn("mx-auto max-w-[20px] py-2 ", {
//               hidden: !collapsed,
//             })}
//           />
//         </div>
//         <Menu
//           defaultSelectedKeys={[selected]}
//           mode="inline"
//           items={getConditionalItems()}
//         ></Menu>
//         {/* <Menu className='absolute bottom-2' mode='inline'>
//           <Menu.Item key='logout' icon={<LogoutOutlined />} onClick={logOut}>
//             Đăng xuất
//           </Menu.Item>
//           <div className='pt-3 border-t-2' onClick={() => handleCollasped(collapsed)}>
//             <MenuOutlined className='ml-2'></MenuOutlined>
//           </div>
//         </Menu> */}
//       </Sider>
//     </>
//   );
// }
