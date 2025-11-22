"use client";
import { Collapse, ConfigProvider } from "antd";

export default function FAQSection({ items, faqHeading }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-4 pb-8  md:pb-16 lg:pb-20">
      <h1 className="section-title text-center ">
        <span className="text-[#0A0A0A]">{faqHeading?.faqTitle} </span>
      </h1>
      <p className="section-subtitle text-center mb-9!">{faqHeading?.faqSubtitle}</p>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorText: "#0A0A0A",
            },
          },
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          style={{ backgroundColor: "transparent" }}
          size="large"
          className="custom-faq-collapse"
        />
      </ConfigProvider>

      <style jsx global>{`
        .custom-faq-collapse .ant-collapse-item {
          margin-bottom: 16px !important;
          background-color: transparent !important;
          border: 1px solid #0000001A !important;
          border-radius: 8px !important;
          
        }

        .custom-faq-collapse .ant-collapse-header {
          padding: 16px 24px !important;
          background-color: transparent !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          color: #0A0A0A !important;
          font-size: 16px !important;
        }

        .custom-faq-collapse .ant-collapse-content {
          background-color: transparent !important;
          border-top: none !important;
        }

        .custom-faq-collapse .ant-collapse-content-box {
          padding: 0 24px 20px 24px !important;
        }

        .custom-faq-collapse .ant-collapse-expand-icon {
          color: #0A0A0A !important;
          font-size: 14px !important;
        }
      `}</style>
    </div>
  );
}
