import Jwt from "@/utils/jwt";

const routes = [
  {
    path: "/app",
    name: "App",
    redirect: "/app/service-dashboard",
    component: () => import("@/views/App"),
    children: [
      {
        path: "service-dashboard",
        name: "Service Dashboard",
        redirect: "/app/service-dashboard/list",
        component: () => import("@/views/App/ServiceDashboard"),
        children: [
          {
            path: "list",
            name: "Service List",
            component: () => import("@/views/App/ServiceDashboard/ServiceList")
          },
          {
            path: "register/:service",
            name: "Service Register",
            component: () =>
              import("@/views/App/ServiceDashboard/ServiceRegister")
          }
        ]
      },
      {
        path: "storage",
        name: "Storage",
        component: () => import("@/views/App/Storage"),
        children: [
          {
            path: "folder/:id",
            name: "Storage Folder"
          }
        ]
      },
      {
        path: "computing",
        name: "Computing",
        component: () => import("@/views/App/Computing")
      },
      {
        path: "virtual-machine",
        name: "VirtualMachine",
        component: () => import("@/views/App/VirtualMachine")
      },
      {
        path: "account-management",
        name: "Account Management",
        redirect: "/app/account-management/list",
        beforeEnter: (to, from, next) => {
          const accountType = Jwt.getProperty("type");
          if (accountType === "admin") {
            next();
          }
        },
        component: () => import("@/views/App/AccountManagement"),
        children: [
          {
            path: "list",
            name: "Account List",
            component: () => import("@/views/App/AccountManagement/AccountList")
          },
          {
            path: "add",
            name: "Add Account",
            component: () => import("@/views/App/AccountManagement/AccountForm")
          },
          {
            path: "edit/:id",
            name: "Edit Account",
            component: () => import("@/views/App/AccountManagement/AccountForm")
          }
        ]
      },
      {
        path: "feature-management",
        name: "Feature Management",
        redirect: "/app/feature-management/request-list",
        beforeEnter: (to, from, next) => {
          const accountType = Jwt.getProperty("type");
          if (accountType === "admin") {
            next();
          }
        },
        component: () => import("@/views/App/FeatureManagement"),
        children: [
          {
            path: "request-list",
            name: "Feature Request List",
            component: () => import("@/views/App/FeatureManagement/RequestList")
          },
          {
            path: "approved-request-list",
            name: "Approved Request List",
            component: () =>
              import("@/views/App/FeatureManagement/ApprovedRequestList")
          }
        ]
      }
    ]
  }
];
export default routes;
