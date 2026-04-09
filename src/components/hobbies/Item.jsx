import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Item = (props) => {
  return (
    <Card className="border-[var(--surface-border)] bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--surface-shadow-strong)]">
      <CardContent className="p-4">
        <img
          src={props.img}
          alt={props.name}
          className="w-[295px] max-w-full rounded-2xl ring-1 ring-border/50 max-[576px]:w-full"
        />
        <h3 className="mt-3 font-medium text-primary" style={{ fontSize: "var(--small-font-size)" }}>
          {props.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default Item;
