'use client'

import ProjectCard from "./ProjectCard2"
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Project } from "@/types";

const UiGrid = () => {
    const [uiProjects, setUiProjects] = useState<Project[]>([])
    const [uiProjects2, setUiProjects2] = useState<Project[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError('')
                setLoading(true)
                const res1 = await api.get("/api/uiprojects")
                const res2 = await api.get("/api/uiprojects2")

                if (res1.status != 200 || res2.status != 200) {
                    console.log("Error fetching data");
                }

                setUiProjects(res1.data)
                setUiProjects2(res2.data)
            } catch (error) {
                console.log("Error", error)
                setError("Something went wrong, Try again")
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])
    if (loading)
        return (
            <div className="w-[100%] h-[20vh] flex justify-center items-center text-white">
                <span className="pr-4">Loading</span>
                <div className="w-10 h-10 animate-spin border-white border-4 rounded-full border-t-purple-500"></div>
            </div>
        )
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {uiProjects2.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            {uiProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default UiGrid
