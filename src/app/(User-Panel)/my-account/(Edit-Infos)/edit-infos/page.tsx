import Form from "@userPanel/editInfos/components/Form";
import React from "react";

const EditInfosPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        ویرایش اطلاعات
      </h2>

      <Form />
    </section>
  );
};

export default EditInfosPage;
