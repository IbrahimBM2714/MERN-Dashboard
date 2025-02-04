import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="Phone" />
          <label>Address</label>
          <textarea type="text" name="address" rows={5} placeholder="Address" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
