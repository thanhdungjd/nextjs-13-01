const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div style={{ paddingLeft: "5px" }}>DashboardLayout:</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
