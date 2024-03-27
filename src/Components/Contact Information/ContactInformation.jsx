

const ContactInformation = ({ info }) => {
    console.log(info);
    const { address, email, phone } = info
    return (
        <div className="space-y-2">
            <h3 className="font-bold">Contact Information</h3>
            <hr />
            <p><span className="font-semibold">Phone: </span>{phone}</p>
            <p><span className="font-semibold">Email: </span>{email}</p>
            <p><span className="font-semibold">Address: </span>{address}</p>
        </div>
    );
};

export default ContactInformation;