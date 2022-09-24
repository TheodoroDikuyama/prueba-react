import { Drawer } from "@mui/material";
import { Cart } from "../Cart/Cart";

export const Sidebar = (props: any) => {
  const { open, onClose } = props;
  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose ? props.onClose : null}
        variant="temporary"
        anchor="right"
      >
        <Cart />
      </Drawer>
    </div>
  );
};
