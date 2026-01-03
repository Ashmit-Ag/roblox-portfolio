import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("ui_projects")
    .select(`
      id,
      title,
      description,
      images,
      technologies,
      year,
      featured
    `).order("order", {ascending: true});

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
