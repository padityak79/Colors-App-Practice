export default {
    up() {},
    down(size) {
      const sizes = {
        xs: "505.98px",
        sm: "707.98px",
        md: "951.98px",
        lg: "1199.98px"
      };
      return `@media (max-width: ${sizes[size]})`;
    }
};