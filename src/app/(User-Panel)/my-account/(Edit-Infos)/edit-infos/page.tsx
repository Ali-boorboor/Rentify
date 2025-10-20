import React from "react";
import Form from "@userPanel/editInfos/components/Form";

const EditInfosPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        ویرایش اطلاعات
      </h2>

      <Form />
    </section>
  );
};

export default EditInfosPage;
