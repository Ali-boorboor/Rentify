import React from "react";
import * as dialog from "@/components/ui/dialog";
import * as accordion from "@/components/ui/accordion";
import * as dropdownMenu from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronDown, Funnel, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const FiltersBar = () => {
  return (
    <section className="bg-card shadow-sm border p-4">
      {/* change variant="outline" to variant="default" when a filter added */}
      <div className="container m-auto flex gap-2 h-10">
        <dialog.Dialog>
          <dialog.DialogTrigger asChild>
            <Button className="rounded-full relative" variant="outline">
              <Funnel className="size-4.5" />
              {/* if there was any filter show => <span className="absolute -top-1 -left-2 bg-destructive text-destructive-foreground w-5 h-5 flex justify-center items-center rounded-full border text-sm">
              ۱ filters count
              </span> */}
              فیلترها
            </Button>
          </dialog.DialogTrigger>

          <dialog.DialogContent showCloseButton={false} dir="rtl">
            <dialog.DialogClose asChild>
              <Button
                className="text-destructive absolute top-4 left-4 has-[>svg]:px-1.5"
                variant="link"
              >
                <X className="size-5 p-0" />
              </Button>
            </dialog.DialogClose>

            <dialog.DialogHeader className="sm:text-right">
              <dialog.DialogTitle>فیلترها</dialog.DialogTitle>
              <dialog.DialogDescription className="sr-only">
                فیلترها
              </dialog.DialogDescription>
            </dialog.DialogHeader>

            <accordion.Accordion type="single" collapsible>
              <accordion.AccordionItem value="item-1">
                <accordion.AccordionTrigger>نوع ملک</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-2">
                <accordion.AccordionTrigger>شهر</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-3">
                <accordion.AccordionTrigger>رهن</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-4">
                <accordion.AccordionTrigger>اجاره</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-5">
                <accordion.AccordionTrigger>متراژ</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-6">
                <accordion.AccordionTrigger>
                  تعداد اتاق
                </accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-7">
                <accordion.AccordionTrigger>امکانات</accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>

              <accordion.AccordionItem value="item-8">
                <accordion.AccordionTrigger>
                  امکانات تصویری آگهی
                </accordion.AccordionTrigger>
                <accordion.AccordionContent>
                  متن تستی
                </accordion.AccordionContent>
              </accordion.AccordionItem>
            </accordion.Accordion>

            <dialog.DialogFooter>
              <dialog.DialogClose asChild>
                <div className="flex flex-wrap-reverse items-center gap-4 w-full">
                  <Button className="grow text-destructive" variant="ghost">
                    حذف همه
                  </Button>
                  <Button className="grow hover:bg-primary">
                    مشاهده نتایج
                  </Button>
                </div>
              </dialog.DialogClose>
            </dialog.DialogFooter>
          </dialog.DialogContent>
        </dialog.Dialog>

        <Separator className="mr-2 hidden sm:block" orientation="vertical" />

        <ScrollArea
          className="line-clamp-1 whitespace-nowrap hidden sm:block"
          dir="rtl"
        >
          <div className="space-x-2 px-2">
            <dropdownMenu.DropdownMenu dir="rtl">
              <dropdownMenu.DropdownMenuTrigger asChild>
                {/* change variant to success|orange|secondary based on property type */}
                <Button className="rounded-full" variant="success">
                  آپارتمان
                  <ChevronDown className="size-4.5" />
                </Button>
              </dropdownMenu.DropdownMenuTrigger>

              <dropdownMenu.DropdownMenuContent className="w-60 md:w-80 text-center">
                <dropdownMenu.DropdownMenuLabel>
                  نوع ملک
                </dropdownMenu.DropdownMenuLabel>

                <dropdownMenu.DropdownMenuItem
                  className="cursor-pointer justify-center"
                  data-value="villa"
                >
                  ویلا
                </dropdownMenu.DropdownMenuItem>
                <dropdownMenu.DropdownMenuItem
                  className="cursor-pointer justify-center"
                  data-value="apartment"
                >
                  آپارتمان
                </dropdownMenu.DropdownMenuItem>
                <dropdownMenu.DropdownMenuItem
                  className="cursor-pointer justify-center"
                  data-value="villa-house"
                >
                  خانه ویلایی
                </dropdownMenu.DropdownMenuItem>
              </dropdownMenu.DropdownMenuContent>
            </dropdownMenu.DropdownMenu>

            <Button className="rounded-full bg-primary/10" variant="outline">
              فقط اگهی های عکس دار
              <X className="size-4.5" />
            </Button>
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FiltersBar;
