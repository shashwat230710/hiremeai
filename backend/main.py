import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from pydantic import BaseModel
from pypdf import PdfReader

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY") or "dummy_key"
client = Groq(api_key=groq_api_key)

model = "llama-3.3-70b-versatile"
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# parse resume schemas
class Experience(BaseModel):
    company: str | None = None
    role: str | None = None
    duration: str | None = None
    description: str | None = None
    skills_used: list[str] = []

class Resume(BaseModel):
    name: str | None = None
    email: str | None = None
    phone: str | None = None
    total_experience_years: float | None = None
    skills: list[str] = []
    experiences: list[Experience] = []
    education: list[str] = []
    projects: list[str] = []
    certifications: list[str] = []

resume_schema = Resume.model_json_schema()

class ChatRequest(BaseModel):
    question: str

DEFAULT_RESUME = Resume(
    name="Raj",
    email="rajkumarbxr78@gmail.com",
    phone="+91-7004155718",
    total_experience_years=2.0,
    skills=[
        "C++", "Java", "HTML", "CSS", "JavaScript",
        "Spring Boot", "React.js", "Node.js", "Express.js", "Flutter",
        "MySQL", "MongoDB", "Firebase", "OOP", "DSA", "Low Level Design",
        "Operating Systems", "DBMS"
    ],
    experiences=[
        Experience(
            company="Full Stack & App Development Projects",
            role="Full Stack & Mobile App Developer",
            duration="2023 — Present",
            description="Developed MediBuddy (MERN Stack Doctor Appointment App with REST APIs) and WE CHAT (Flutter real-time messaging app with Firebase Auth & Cloud Firestore).",
            skills_used=["React.js", "Node.js", "Express.js", "MongoDB", "Flutter", "Firebase", "Java", "C++"]
        )
    ],
    education=[
        "B.Tech. Computer Science & Engineering, Chandigarh Engineering College, CGC, Landran (Expected 2027, CGPA: 8.68/10)",
        "Senior Secondary (Class XII), Cambridge Sr. Sec. School, Buxar (2022, 97%)",
        "Secondary (Class X), St. Pauls School, Sasaram (2020, 88.6%)"
    ],
    projects=[
        "MediBuddy - Doctor Appointment App (MERN Stack): Role-based doctor appointment portal for patient booking, doctor management, and admin workflow. Designed RESTful APIs for auth, appointment scheduling, and medical history.",
        "WE CHAT - Real time chat app (Flutter & Dart): Real-time messaging application with instant delivery, smooth UI, Firebase Authentication, and Cloud Firestore synchronization."
    ],
    certifications=[
        "HackerRank: Secured 5-star badge in Problem Solving and C++",
        "LeetCode: Solved 1000+ DSA problems with contest rating of 1800+",
        "NPTEL Certification (DBMS): Completed with Silver badge",
        "Infosys Springboard Certification: Certified HTML, CSS, JavaScript Developer",
        "Smart India Hackathon (SIH 2025): SIH 2025 Participant"
    ]
)

def smart_resume_qa(question: str, resume: Resume) -> str:
    q_lower = question.lower()
    candidate_name = resume.name or "Raj"
    
    # 1. DSA / Competitive Programming / Problem Solving / LeetCode / HackerRank / Algorithms
    if any(k in q_lower for k in ["dsa", "algo", "algorithm", "data structure", "leetcode", "hackerrank", "problem solving", "contest", "rating", "practis", "practic", "codeforces", "coding"]):
        dsa_cert = [c for c in resume.certifications if "leetcode" in c.lower() or "hackerrank" in c.lower() or "problem solving" in c.lower() or "dsa" in c.lower()]
        cert_info = "\n• ".join(dsa_cert) if dsa_cert else "Solved 1000+ DSA problems on LeetCode (1800+ rating) and hold a 5-star HackerRank badge in Problem Solving & C++."
        return f"Yes, {candidate_name} actively practices Data Structures, Algorithms (DSA), and Competitive Programming.\n\nKey Highlights:\n• {cert_info}"

    # 2. Skills / Tech Stack / Programming Languages / Databases
    elif any(k in q_lower for k in ["skill", "stack", "technology", "tech", "language", "framework", "tool", "database", "frontend", "backend", "mobile", "app dev"]):
        skills_str = ", ".join(resume.skills) if resume.skills else "C++, Java, React.js, Node.js, Express.js, Flutter, MongoDB, MySQL, Firebase, DSA"
        return f"{candidate_name}'s core technical skills include:\n{skills_str}\n\nKey Focus Areas: Full Stack Web Development (MERN), Mobile App Development (Flutter), Database Management, and Low-Level/System Design."

    # 3. Projects / MediBuddy / WE CHAT / Work Built
    elif any(k in q_lower for k in ["project", "built", "build", "medibuddy", "we chat", "wechat", "app", "application", "portfolio"]):
        if resume.projects:
            proj_str = "\n\n".join([f"• {p}" for p in resume.projects])
            return f"Here are {candidate_name}'s key technical projects:\n\n{proj_str}"
        return f"{candidate_name} has developed full-stack web applications like MediBuddy (MERN doctor appointment system) and mobile apps like WE CHAT (Flutter real-time chat with Firebase)."

    # 4. Experience / Work / Internships / Career History
    elif any(k in q_lower for k in ["experience", "exp", "work", "job", "internship", "company", "role", "history", "years", "career"]):
        if resume.experiences:
            exp_list = []
            for e in resume.experiences:
                exp_list.append(f"• Role: {e.role or 'Developer'}\n  Company/Domain: {e.company or 'Projects'}\n  Duration: {e.duration or 'Recent'}\n  Description: {e.description or ''}")
            exp_str = "\n\n".join(exp_list)
            return f"{candidate_name} has approximately {resume.total_experience_years or 2} years of active development experience:\n\n{exp_str}"
        return f"{candidate_name} has {resume.total_experience_years or 2} years of experience specializing in Full Stack and Mobile App Development."

    # 5. Education / Degree / College / University / CGPA / School / Marks
    elif any(k in q_lower for k in ["education", "degree", "college", "university", "cgpa", "gpa", "school", "study", "studied", "b.tech", "btech", "cse", "marks", "12th", "10th", "matric", "cgc"]):
        if resume.education:
            edu_str = "\n".join([f"• {e}" for e in resume.education])
            return f"Educational Background for {candidate_name}:\n{edu_str}"
        return f"{candidate_name} is pursuing B.Tech in CSE from Chandigarh Engineering College (CGC Landran) with a CGPA of 8.68/10."

    # 6. Certifications / Achievements / Hackathons / Awards / NPTEL
    elif any(k in q_lower for k in ["certification", "certif", "achievement", "award", "nptel", "infosys", "sih", "hackathon", "badge"]):
        if resume.certifications:
            cert_str = "\n".join([f"• {c}" for c in resume.certifications])
            return f"Certifications & Achievements:\n{cert_str}"
        return f"{candidate_name} holds a HackerRank 5-Star badge, LeetCode 1000+ solved problems (1800+ rating), NPTEL DBMS Silver Badge, Infosys Springboard Certification, and was an SIH 2025 Participant."

    # 7. Contact / Email / Phone / Connect
    elif any(k in q_lower for k in ["contact", "email", "mail", "phone", "number", "mobile", "reach", "hire", "call", "connect"]):
        return f"You can reach {candidate_name} directly via:\n• Email: {resume.email or 'N/A'}\n• Phone: {resume.phone or 'N/A'}"

    # 8. Greetings / About / Introduce / Overview
    elif any(k in q_lower for k in ["who", "yourself", "introduce", "summary", "overview", "about", "tell me", "hi", "hello", "hey"]):
        return (
            f"Hello! I am {candidate_name}'s AI Assistant. "
            f"{candidate_name} is a Computer Science Engineering student (CGPA: 8.68) with ~2 years of experience in Full Stack (MERN) & Mobile App Development (Flutter).\n\n"
            f"Key Highlights:\n"
            f"• 1000+ DSA problems solved (1800+ LeetCode contest rating)\n"
            f"• HackerRank 5-Star Badge in Problem Solving & C++\n"
            f"• Major Projects: MediBuddy (Doctor Appointment App) & WE CHAT (Flutter Real-time Chat App)\n\n"
            f"Feel free to ask me anything about {candidate_name}'s skills, projects, experience, education, or achievements!"
        )

    # 9. Direct Keyword Matcher across Resume Fields
    matches = []
    for skill in resume.skills:
        if skill.lower() in q_lower:
            matches.append(f"Skill: Proficient in {skill}.")
    for project in resume.projects:
        words = [w for w in q_lower.split() if len(w) > 3]
        if any(w in project.lower() for w in words):
            matches.append(f"Project: {project}")
    for cert in resume.certifications:
        words = [w for w in q_lower.split() if len(w) > 3]
        if any(w in cert.lower() for w in words):
            matches.append(f"Achievement: {cert}")

    if matches:
        return "\n".join(list(set(matches)))

    # 10. Fallback Response
    skills_preview = ", ".join(resume.skills[:8]) if resume.skills else "C++, Java, React, Node.js, Flutter"
    return (
        f"I am {candidate_name}'s AI Assistant. "
        f"{candidate_name} is skilled in {skills_preview}... "
        f"You can ask me about technical skills, DSA practice, MediBuddy or WE CHAT projects, education, or certifications!"
    )

def ask_candidate(question: str, resume: Resume):
    api_key = os.getenv("GROQ_API_KEY")
    if api_key and api_key.strip() and api_key != "dummy_key":
        try:
            client = Groq(api_key=api_key)
            system_prompt = f"""
You are an AI assistant representing a job candidate named {resume.name or 'Raj'}.

Below is the candidate's complete parsed resume:
{resume.model_dump_json(indent=2)}

Rules:
1. Answer accurately and directly based on the candidate's background.
2. If asked about DSA, algorithms, competitive programming, skills, projects, education, or achievements, provide complete, clear details from the resume.
3. Be professional, friendly, and speak as the candidate's representative or candidate.
4. Never hallucinate information absent from the resume.
"""
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": question}
                ]
            )
            ans = response.choices[0].message.content
            if ans and len(ans.strip()) > 0:
                return ans
        except Exception as e:
            print(f"Groq API error: {e}. Falling back to Smart Resume QA engine.")

    return smart_resume_qa(question, resume)

def parse_resume(resume_text):
    if not os.getenv("GROQ_API_KEY"):
        return DEFAULT_RESUME

    system_prompt = f"""
    You are an expert resume parser.
    Extract information from the resume into valid JSON matching this schema:
    {resume_schema}
    """
    user_prompt = f"Parse the following resume:\n{resume_text}"
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            response_format={"type": "json_object"}
        )
        raw_output = response.choices[0].message.content
        data = json.loads(raw_output)
        return Resume(**data)
    except Exception:
        return DEFAULT_RESUME

def read_pdf(file_path: Path):
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

cached_resume: Resume | None = None

def get_resume() -> Resume:
    global cached_resume
    if cached_resume is None:
        try:
            file_path = Path("Raj_2336991.pdf")
            if not file_path.exists():
                file_path = Path("my_resume.pdf")
            if not file_path.exists():
                pdf_files = list(Path(".").glob("*.pdf"))
                if pdf_files:
                    file_path = pdf_files[0]
                else:
                    file_path = None
            
            if file_path and file_path.exists():
                resume_text = read_pdf(file_path)
                cached_resume = parse_resume(resume_text)
            else:
                cached_resume = DEFAULT_RESUME
        except Exception:
            cached_resume = DEFAULT_RESUME
    return cached_resume

@app.get("/")
def home():
    return {
        "message": "HireMeAI Backend API is running for Raj's resume.",
        "status": "online",
        "version": "2.0.0"
    }

@app.get("/profile")
def profile():
    resume = get_resume()
    return resume.model_dump()

@app.post("/chat")
def chat(request: ChatRequest):
    resume = get_resume()
    answer = ask_candidate(request.question, resume)
    return {
        "answer": answer
    }

# ---------------------------------------------------------
# Phase 2 & 3: Extended AI Intelligence Endpoints
# ---------------------------------------------------------

class ATSRequest(BaseModel):
    job_description: str | None = None

class CoverLetterRequest(BaseModel):
    job_role: str = "Full Stack Developer"
    company_name: str = "Innovative Tech Solutions"
    tone: str = "Enthusiastic"  # Formal, Enthusiastic, Creative, Executive, Casual
    custom_notes: str | None = None

class MockEvaluateRequest(BaseModel):
    question: str
    category: str = "Behavioral (STAR)"
    answer: str

@app.post("/ats-analyze")
def analyze_ats(req: ATSRequest):
    resume = get_resume()
    
    # Core ATS Section Scoring
    contact_score = 100 if (resume.email and resume.phone) else 60
    skills_score = min(100, max(50, len(resume.skills) * 5))
    experience_score = 92 if resume.experiences else 70
    education_score = 95 if resume.education else 75
    formatting_score = 95

    # Match Score against Job Description
    job_desc = (req.job_description or "").lower()
    matched_keywords = []
    missing_keywords = []
    
    all_known_tech = [
        "react", "react.js", "node.js", "node", "express", "flutter", "dart", 
        "c++", "java", "spring boot", "mongodb", "mysql", "firebase", "dsa", 
        "rest api", "html", "css", "javascript", "typescript", "git", "oop",
        "system design", "docker", "aws", "python", "full stack"
    ]

    if job_desc:
        target_terms = [t for t in all_known_tech if t in job_desc]
        if not target_terms:
            target_terms = ["react", "node", "javascript", "c++", "dsa", "mongodb", "flutter"]
        
        for term in target_terms:
            if any(term in s.lower() for s in resume.skills) or term in json.dumps(resume.model_dump()).lower():
                matched_keywords.append(term.title())
            else:
                missing_keywords.append(term.title())
        
        match_rate = len(matched_keywords) / max(1, len(target_terms))
        overall_ats = int(75 + (match_rate * 23))
    else:
        matched_keywords = ["React.js", "Node.js", "Express.js", "Flutter", "C++", "Java", "MongoDB", "MySQL", "DSA"]
        missing_keywords = ["Docker", "AWS", "TypeScript", "Kubernetes"]
        overall_ats = 92

    suggestions = [
        "Use strong action verbs like 'Engineered', 'Optimized', 'Deployed', 'Architected'.",
        "Quantify achievements (e.g., 'Solved 1000+ DSA problems', '97% XII score', '8.68 CGPA').",
        "Include target keywords from job description (e.g. TypeScript, AWS, CI/CD)." if missing_keywords else "Excellent keyword density for full stack role."
    ]

    return {
        "overall_ats_score": overall_ats,
        "section_scores": {
            "contact_info": contact_score,
            "skills": skills_score,
            "experience": experience_score,
            "education": education_score,
            "formatting": formatting_score
        },
        "matched_keywords": list(set(matched_keywords)),
        "missing_keywords": list(set(missing_keywords)),
        "keyword_density_percent": round(len(matched_keywords) * 4.5 + 45, 1),
        "suggestions": suggestions,
        "quantifiable_metrics_found": [
            "1000+ DSA Problems Solved",
            "1800+ LeetCode Contest Rating",
            "8.68 / 10 B.Tech CGPA",
            "97% Class XII Marks",
            "2.0+ Years Development Experience"
        ]
    }

@app.post("/generate-cover-letter")
def generate_cover_letter(req: CoverLetterRequest):
    resume = get_resume()
    c_name = resume.name or "Raj"
    api_key = os.getenv("GROQ_API_KEY")

    if api_key and api_key.strip() and api_key != "dummy_key":
        try:
            client = Groq(api_key=api_key)
            prompt = f"""
Write a compelling, professional cover letter for {c_name} applying for the position of '{req.job_role}' at '{req.company_name}'.
Tone: {req.tone}
Candidate Profile:
- Skills: {', '.join(resume.skills)}
- Experience: {resume.total_experience_years} years in Full Stack (MERN) and Flutter mobile apps.
- Projects: MediBuddy (Doctor Appointment App) and WE CHAT (Real-time Messaging).
- Key Achievements: 1000+ DSA solved (1800+ LeetCode rating), HackerRank 5-Star.
Custom notes: {req.custom_notes or 'None'}

Format: 3 polished paragraphs (Introduction, Core Value/Projects & Achievements, Closing & Call to Action).
"""
            response = client.chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}]
            )
            content = response.choices[0].message.content
            if content and len(content.strip()) > 0:
                return {
                    "cover_letter": content,
                    "tone": req.tone,
                    "company_name": req.company_name,
                    "job_role": req.job_role
                }
        except Exception:
            pass

    # High-quality structured fallback cover letter
    greeting = f"Dear Hiring Manager at {req.company_name},"
    intro = (
        f"I am writing to express my enthusiastic interest in the {req.job_role} position at {req.company_name}. "
        f"As a Computer Science Engineering student with over 2 years of hands-on experience developing high-performance "
        f"Full Stack (MERN) web applications and Flutter mobile solutions, I am eager to bring my problem-solving drive "
        f"and technical expertise to your engineering team."
    )

    body = (
        f"Throughout my development journey, I have engineered end-to-end applications such as 'MediBuddy' (a role-based doctor "
        f"appointment portal with RESTful APIs) and 'WE CHAT' (a real-time messaging mobile application built with Flutter and Firebase). "
        f"Furthermore, my deep commitment to algorithm design and efficiency is backed by solving over 1,000 DSA problems on LeetCode "
        f"(achieving an 1,800+ contest rating) alongside a 5-Star HackerRank badge in Problem Solving and C++."
    )

    closing = (
        f"I am confident that my technical skills in {', '.join(resume.skills[:6])}, combined with my passion for building scalable software, "
        f"make me a strong fit for {req.company_name}. I look forward to discussing how my background aligns with your team's goals."
    )

    signoff = f"Sincerely,\n{c_name}\n{resume.email or ''} | {resume.phone or ''}"

    full_letter = f"{greeting}\n\n{intro}\n\n{body}\n\n{closing}\n\n{signoff}"

    return {
        "cover_letter": full_letter,
        "tone": req.tone,
        "company_name": req.company_name,
        "job_role": req.job_role
    }

@app.get("/mock-interview/questions")
def get_mock_questions():
    return {
        "categories": [
            {
                "id": "behavioral",
                "title": "STAR Behavioral",
                "description": "Questions evaluating leadership, teamwork, problem-solving, and conflict resolution using Situation, Task, Action, Result.",
                "questions": [
                    "Tell me about a challenging technical bug you encountered in a project (like MediBuddy or WE CHAT) and how you resolved it.",
                    "Describe a situation where you had to learn a new technology or framework quickly to complete a task.",
                    "Give an example of how you prioritized features when developing an app under time constraints."
                ]
            },
            {
                "id": "technical",
                "title": "Technical & DSA",
                "description": "Core computer science fundamentals, data structures, algorithm optimization, and low-level design.",
                "questions": [
                    "How do you optimize time and space complexity when solving graph or dynamic programming problems?",
                    "Explain the difference between SQL (MySQL) and NoSQL (MongoDB/Firestore) databases and when you chose each for MediBuddy or WE CHAT.",
                    "What are the core principles of OOP and how do you apply them when designing RESTful APIs?"
                ]
            },
            {
                "id": "system_design",
                "title": "System Architecture",
                "description": "Scalability, API design, authentication, state management, and cloud architecture.",
                "questions": [
                    "How would you design a real-time messaging system like WE CHAT to handle 100,000 concurrent active WebSocket connections?",
                    "Explain JWT authentication workflow and security best practices for role-based authorization in MERN stack.",
                    "How do you handle state management and offline caching in Flutter applications?"
                ]
            }
        ]
    }

@app.post("/mock-interview/evaluate")
def evaluate_mock_answer(req: MockEvaluateRequest):
    ans = req.answer.strip()
    words = ans.split()
    word_count = len(words)
    ans_lower = ans.lower()

    # STAR Structure Analysis
    has_situation = any(w in ans_lower for w in ["when", "during", "while", "project", "building", "situation", "medibuddy", "we chat", "task"])
    has_action = any(w in ans_lower for w in ["implemented", "designed", "built", "used", "created", "refactored", "optimized", "solved", "wrote"])
    has_result = any(w in ans_lower for w in ["resulted", "achieved", "improved", "led to", "increased", "rating", "percent", "successfully", "outcome"])

    star_score = 40
    if has_situation: star_score += 20
    if has_action: star_score += 25
    if has_result: star_score += 15

    # Length Evaluation
    if word_count < 25:
        length_feedback = "Your answer is quite brief. Aim for 60-150 words to provide enough detail."
        length_score = 50
    elif word_count > 300:
        length_feedback = "Your answer is detailed, but keep it concise to maintain recruiter engagement."
        length_score = 80
    else:
        length_feedback = "Optimal answer length! Well-balanced conciseness and detail."
        length_score = 95

    # Feedback and Recommendations
    improvement_tips = []
    if not has_result:
        improvement_tips.append("Add quantifiable results or outcomes (e.g. 'reduced latency by 30%' or 'scaled to 1,000 users').")
    if not has_action:
        improvement_tips.append("Highlight specific action verbs describing what YOU built or engineered.")
    if "dsa" in req.question.lower() and not any(k in ans_lower for k in ["complexity", "o(1)", "o(n)", "log n", "tree", "hash", "graph"]):
        improvement_tips.append("Mention Big-O time and space complexity explicitly for DSA questions.")
    if not improvement_tips:
        improvement_tips.append("Excellent structured answer! Try recording your response aloud to practice pacing and vocal confidence.")

    overall_score = min(100, int((star_score * 0.5) + (length_score * 0.3) + 20))

    return {
        "overall_score": overall_score,
        "word_count": word_count,
        "star_breakdown": {
            "situation_task": "Strong" if has_situation else "Needs Detail",
            "action_taken": "Strong" if has_action else "Needs Specific Action Verbs",
            "result_impact": "Strong" if has_result else "Missing Quantifiable Outcome"
        },
        "length_feedback": length_feedback,
        "improvement_tips": improvement_tips,
        "sample_refined_bullet": f"In a recent project, I {words[0] if words else 'built'} an optimized solution that significantly enhanced system performance."
    }

@app.get("/analytics/data")
def get_analytics_data():
    return {
        "metrics": {
            "resume_impressions": 1420,
            "ats_compatibility_avg": 92,
            "mock_interviews_completed": 18,
            "streak_days": 7,
            "applications_sent": 14,
            "interviews_scheduled": 4,
            "offers_received": 1
        },
        "score_history": [
            {"date": "Mon", "ats_score": 78, "interview_score": 72},
            {"date": "Tue", "ats_score": 82, "interview_score": 79},
            {"date": "Wed", "ats_score": 85, "interview_score": 84},
            {"date": "Thu", "ats_score": 88, "interview_score": 86},
            {"date": "Fri", "ats_score": 90, "interview_score": 89},
            {"date": "Sat", "ats_score": 92, "interview_score": 93},
            {"date": "Sun", "ats_score": 94, "interview_score": 95}
        ],
        "skills_growth": [
            {"skill": "React.js / Frontend", "level": 95},
            {"skill": "Data Structures & DSA", "level": 92},
            {"skill": "Node.js / Express Backend", "level": 88},
            {"skill": "Flutter / Mobile", "level": 85},
            {"skill": "Database (MongoDB & SQL)", "level": 84},
            {"skill": "System Design & Low-Level Design", "level": 78}
        ],
        "applications": [
            {
                "id": "app-1",
                "company": "Google / Tech Giant",
                "role": "Full Stack Software Engineer",
                "status": "Interview Scheduled",
                "date": "2026-08-08",
                "match_score": 94
            },
            {
                "id": "app-2",
                "company": "Stripe / Fintech",
                "role": "Backend Engineer (Node/C++)",
                "status": "Screening",
                "date": "2026-08-05",
                "match_score": 90
            },
            {
                "id": "app-3",
                "company": "Uber / Mobile Platform",
                "role": "Flutter Mobile Developer",
                "status": "Offer Received",
                "date": "2026-08-02",
                "match_score": 96
            },
            {
                "id": "app-4",
                "company": "High-Growth AI Startup",
                "role": "AI Applications Engineer",
                "status": "Applied",
                "date": "2026-08-09",
                "match_score": 88
            }
        ]
    }